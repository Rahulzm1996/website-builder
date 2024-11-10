import Stack from "@mui/material/Stack";

import { SectionContainer } from "../../components/SectionContainer";
import { RowContainer } from "../../components/RowContainer";
import { ElementsDrawer } from "../ElementsDrawer";
import { ComponentTypes } from "../../contants";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";

import {
  toggleAddElementsDrawer,
  toggleColumnDrawer,
} from "../../store/formBuilderSlice";
import {
  AddNewRowOrElement,
  CustomImage,
  CustomList,
  DynamicElementContainer,
  Headline,
  Paragraph,
  SubHeadline,
} from "../../components";
import { ElementSettingDrawer } from "../ElementSettingDrawer";
import Controls from "./Controls";
import { ColumnLayoutDrawer } from "../ColumnLayoutDrawer";
import { RenderColumnComponent, RenderColumnElementComponent } from "./types";
import { AddNewRowOrElementwrapper, FormBuilderStyles } from "./styles";
import React from "react";

const FormBuilder = () => {
  const dispatch = useFormBuilderDispatch();
  const {
    sections,
    viewMode,
    columnsDrawerConfig,
    elementsDrawerConfig,
    editElementDrawerConfig,
  } = useFormBuilderSelector((state) => state.formBuilder);
  const { open: showColumnDrawer } = columnsDrawerConfig || {};
  const { open: showElementsDrawer } = elementsDrawerConfig || {};
  const { open: showEditElementsDrawer } = editElementDrawerConfig || {};

  /**
   * The renderSingleElement function renders an individual element within a column based on its type (e.g., HEADLINE, IMAGE, etc.). It applies common properties and wraps the element in the appropriate component, using DynamicElementContainer for dynamic rendering. If the element is of type EMPTY_ELEMENT, it displays an "Add new Element" button instead.
   */
  const renderSingleElement = ({
    sectionIdx,
    rowIdx,
    columnIdx,
    elementIdx,
    singleElementComponent,
  }: RenderColumnElementComponent) => {
    const { type, props, id } = singleElementComponent || {};

    const commonPropsForElements = {
      sectionIdx: sectionIdx,
      rowIdx: rowIdx,
      columnIdx: columnIdx,
      elementIdx: elementIdx,
      elementId: id,
      type: type,
    };

    switch (type) {
      case ComponentTypes.EMPTY_ELEMENT: {
        return (
          <AddNewRowOrElementwrapper key={columnIdx}>
            <AddNewRowOrElement
              onClick={() => {
                dispatch(
                  toggleAddElementsDrawer({
                    open: true,
                    elementAttributes: {
                      sectionIdx,
                      rowIdx,
                      columnIdx,
                      elementIdx,
                      mode: "new",
                    },
                  })
                );
              }}
              buttonText="Add new Element"
              variant="element"
            />
          </AddNewRowOrElementwrapper>
        );
      }
      case ComponentTypes.HEADLINE: {
        return (
          <DynamicElementContainer
            component={Headline}
            {...props}
            {...commonPropsForElements}
          />
        );
      }
      case ComponentTypes.SUB_HEADLINE: {
        return (
          <DynamicElementContainer
            component={SubHeadline}
            {...props}
            {...commonPropsForElements}
          />
        );
      }
      case ComponentTypes.PARAGRAPH: {
        return (
          <DynamicElementContainer
            component={Paragraph}
            {...props}
            {...commonPropsForElements}
          />
        );
      }
      case ComponentTypes.IMAGE: {
        return (
          <DynamicElementContainer
            component={CustomImage}
            {...props}
            {...commonPropsForElements}
          />
        );
      }
      case ComponentTypes.LIST: {
        return (
          <DynamicElementContainer
            component={CustomList}
            {...props}
            {...commonPropsForElements}
          />
        );
      }
      default:
        break;
    }
  };

  /**
   * The renderColumnWithElements function renders a column containing multiple elements within a specified section and row. It wraps each element in a Stack component, applying consistent styling and using renderSingleElement to render each element individually.
   */
  const renderColumnWithElements = ({
    sectionIdx,
    rowIdx,
    columnIdx,
    singleColumnComponent,
  }: RenderColumnComponent) => {
    const { id, elements } = singleColumnComponent || {};

    return (
      <>
        <Stack
          key={id}
          gap={1}
          className="columnElementsContainer"
          sx={{
            minHeight: "40px",
            display: "flex",
            flexWrap: "wrap",
            flex: "1 1 250px",
            padding: "8px",
            transition: "border 0.2s ease-in-out 0s",
            position: "relative",
            border: "2px solid transparent",
          }}
        >
          {elements?.map((singleElementComponent, elementIdx) => {
            return (
              <React.Fragment key={singleElementComponent.id}>
                {renderSingleElement({
                  sectionIdx,
                  rowIdx,
                  columnIdx,
                  elementIdx,
                  singleElementComponent,
                })}
              </React.Fragment>
            );
          })}
        </Stack>
      </>
    );
  };

  const isMobileView = viewMode === "mobile";

  return (
    <FormBuilderStyles isMobileView={isMobileView}>
      <Controls />
      <Stack className="sectionWrapper">
        {sections.map((singleSection, sectionIdx) => {
          const { id, rows } = singleSection || {};
          const isFirstSection = sectionIdx === 0;
          const isLastSection = sectionIdx === sections.length - 1;
          return (
            <SectionContainer
              sectionIdx={sectionIdx}
              sectionId={id}
              isFirstSection={isFirstSection}
              isLastSection={isLastSection}
            >
              {() => (
                <Stack key={id} gap={2} className="rowsWrapper">
                  {rows.map((singleRow, rowIdx) => {
                    const { id, components } = singleRow || {};
                    const isFirstRowOfSection = rowIdx === 0;
                    const isLastRowOfSection = rowIdx === rows.length - 1;
                    return (
                      <RowContainer
                        key={id}
                        sectionIdx={sectionIdx}
                        rowIdx={rowIdx}
                        rowId={id as number}
                        isFirstRowOfSection={isFirstRowOfSection}
                        isLastRowOfSection={isLastRowOfSection}
                      >
                        {() => {
                          return components.map(
                            (singleColumnComponent, columnIdx) =>
                              renderColumnWithElements({
                                sectionIdx,
                                rowIdx,
                                columnIdx,
                                singleColumnComponent,
                              })
                          );
                        }}
                      </RowContainer>
                    );
                  })}

                  {rows.length === 0 ? (
                    <AddNewRowOrElement
                      onClick={() => {
                        dispatch(
                          toggleColumnDrawer({
                            open: true,
                            layoutAttributes: { sectionIdx },
                          })
                        );
                      }}
                      buttonText="Add new Row"
                      variant="row"
                    />
                  ) : null}
                </Stack>
              )}
            </SectionContainer>
          );
        })}
      </Stack>

      <ElementsDrawer open={showElementsDrawer} />
      <ColumnLayoutDrawer open={showColumnDrawer} />
      <ElementSettingDrawer open={showEditElementsDrawer} />
    </FormBuilderStyles>
  );
};

export default FormBuilder;
