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
import { RenderColumnComponent } from "./types";
import { AddNewRowOrElementwrapper, FormBuilderStyles } from "./styles";

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

  const renderColumnComponent = ({
    sectionIdx,
    rowIdx,
    columnIdx,
    singleRowComponent,
  }: RenderColumnComponent) => {
    const { type, props } = singleRowComponent || {};

    switch (type) {
      case ComponentTypes.EMPTY_ELEMENT: {
        return (
          <AddNewRowOrElementwrapper key={columnIdx}>
            <AddNewRowOrElement
              onClick={() => {
                dispatch(
                  toggleAddElementsDrawer({
                    open: true,
                    elementAttributes: { sectionIdx, rowIdx, columnIdx },
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
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            type={type}
            {...props}
          />
        );
      }
      case ComponentTypes.SUB_HEADLINE: {
        return (
          <DynamicElementContainer
            component={SubHeadline}
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            type={type}
            {...props}
          />
        );
      }
      case ComponentTypes.PARAGRAPH: {
        return (
          <DynamicElementContainer
            component={Paragraph}
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            type={type}
            {...props}
          />
        );
      }
      case ComponentTypes.IMAGE: {
        return (
          <DynamicElementContainer
            component={CustomImage}
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            type={type}
            {...props}
          />
        );
      }
      case ComponentTypes.LIST: {
        return (
          <DynamicElementContainer
            component={CustomList}
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            type={type}
            {...props}
          />
        );
      }
      default:
        break;
    }
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
                            (singleRowComponent, columnIdx) =>
                              renderColumnComponent({
                                sectionIdx,
                                rowIdx,
                                columnIdx,
                                singleRowComponent,
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
