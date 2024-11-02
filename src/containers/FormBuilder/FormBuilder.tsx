import React from "react";
import { SectionContainer } from "../../components/SectionContainer";
import { RowContainer } from "../../components/RowContainer";
import { ElementsDrawer } from "../ElementsDrawer";
import { ColumnLayoutSidebar } from "../ColumnLayoutSidebar";
import { useSelector } from "react-redux";
import { ComponentTypes, ComponentTypesMap, StoreState } from "../../contants";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import Stack from "@mui/material/Stack";
import { addElement, addNewRow } from "../../store/formBuilderSlice";
import Box from "@mui/material/Box";
import {
  AddNewRowOrElement,
  DynamicElementContainer,
  ElementContainer,
  Headline,
  SubHeadline,
} from "../../components";
import { ComponentProperties } from "../../types";

interface RenderColumnComponent {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  singleRowComponent: ComponentProperties;
}

const FormBuilder = () => {
  const dispatch = useFormBuilderDispatch();
  const sections = useFormBuilderSelector(
    (state) => state.formBuilder.sections
  );

  // console.log("sections ", { sections });

  const handleAddNewElement = ({
    sectionIdx,
    rowIdx,
    columnIdx,
  }: Partial<RenderColumnComponent>) => {
    // console.log("handle new element called : ", {
    //   sectionIdx,
    //   rowIdx,
    //   columnIdx,
    // });
    dispatch(addElement({ sectionIdx, rowIdx, columnIdx }));
  };

  const renderColumnComponent = ({
    sectionIdx,
    rowIdx,
    columnIdx,
    singleRowComponent,
  }: RenderColumnComponent) => {
    // console.log("renderColumnComponent : ", { singleRowComponent });
    const { type, props } = singleRowComponent || {};

    switch (type) {
      case ComponentTypes.EMPTY_ELEMENT: {
        return (
          <Stack key={columnIdx} className="column">
            <AddNewRowOrElement
              onClick={() => {
                handleAddNewElement({ sectionIdx, rowIdx, columnIdx });
              }}
              buttonText="Add new Element"
              variant="element"
            />
          </Stack>
        );
      }
      case ComponentTypes.HEADLINE: {
        // return <Headline {...{ ...props }} />;
        return (
          <DynamicElementContainer
            component={Headline}
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            {...props}
          />
        );
      }
      case ComponentTypes.SUB_HEADLINE: {
        // return <SubHeadline {...{ ...props }} />;
        return (
          <DynamicElementContainer
            component={SubHeadline}
            sectionIdx={sectionIdx}
            rowIdx={rowIdx}
            columnIdx={columnIdx}
            {...props}
          />
        );
      }
      default:
        break;
    }
  };

  return (
    <Stack mt={"2px"}>
      <SectionContainer>
        {() => {
          return sections.map((singleSection, sectionIdx) => {
            const { id, rows } = singleSection || {};
            // console.log("single section : ", { id, rows, sectionIdx });
            return (
              <Stack
                key={id}
                gap={2}
                sx={{ maxWidth: "1200px", margin: "0 auto" }}
              >
                {rows.map((singleRow, rowIdx) => {
                  // console.log("singleRow : ", { singleRow, rowIdx });
                  const { id, components } = singleRow || {};
                  const isFirstRowOfSection = rowIdx === 0;
                  const isLastRowOfSection = rowIdx === rows.length - 1;
                  return (
                    <RowContainer
                      key={id}
                      sectionIdx={sectionIdx}
                      rowIdx={rowIdx}
                      rowId={id}
                      isFirstRowOfSection={isFirstRowOfSection}
                      isLastRowOfSection={isLastRowOfSection}
                    >
                      {() => {
                        return components.map((singleRowComponent, columnIdx) =>
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
                      dispatch(addNewRow({ sectionIdx }));
                      /*
                  open drawer and select columns layout and then insert row
                  */
                    }}
                    buttonText="Add new Row"
                    variant="row"
                  />
                ) : null}
              </Stack>
            );
          });

          // return <RowContainer></RowContainer>;
        }}
      </SectionContainer>
      {/* <ElementsDrawer open={false} />
      <ColumnLayoutSidebar open={false} onClose={undefined} /> */}
    </Stack>
  );
};

export default FormBuilder;
