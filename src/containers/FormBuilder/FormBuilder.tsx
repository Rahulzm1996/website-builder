import React from "react";
import { SectionContainer } from "../../components/SectionContainer";
import { RowContainer } from "../../components/RowContainer";
import { ElementsDrawer } from "../ElementsDrawer";
import { ColumnLayoutSidebar } from "../ColumnLayoutSidebar";
import { useSelector } from "react-redux";
import { StoreState } from "../../contants";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import Stack from "@mui/material/Stack";
import { AddNewRowAndElementPlaceholder } from "../../components/AddNewRowAndElementPlaceholder";
import { addNewRow } from "../../store/formBuilderSlice";
import Box from "@mui/material/Box";

const FormBuilder = () => {
  const dispatch = useFormBuilderDispatch();
  const sections = useFormBuilderSelector(
    (state) => state.formBuilder.sections
  );

  console.log("sections ", { sections });

  return (
    <Stack mt={"2px"}>
      <SectionContainer>
        {() => {
          return sections.map((singleSection, sectionIdx) => {
            const { id, rows } = singleSection || {};
            console.log("single section : ", { id, rows, sectionIdx });
            return (
              <Stack
                key={id}
                gap={2}
                sx={{ maxWidth: "1200px", margin: "0 auto" }}
              >
                {rows.map((singleRow, rowIdx) => {
                  console.log("singleRow : ", { singleRow, rowIdx });
                  const { id, components } = singleRow || {};
                  const isLastRowOfSection = rowIdx === rows.length - 1;
                  return (
                    <RowContainer
                      key={id}
                      sectionIdx={sectionIdx}
                      rowIdx={rowIdx}
                      isLastRowOfSection={isLastRowOfSection}
                    >
                      {() => {
                        return components.map(
                          (singleRowComponent, columnIdx) => {
                            //render different component based on type of component here default is empty rowElement component
                            return (
                              <Stack key={columnIdx} className="column">
                                <AddNewRowAndElementPlaceholder
                                  onClick={() => {
                                    console.log("add New Element clicked");
                                  }}
                                  buttonText="Add new Element"
                                  variant="element"
                                />
                              </Stack>
                            );
                          }
                        );
                      }}
                    </RowContainer>
                  );
                })}

                {rows.length === 0 ? (
                  <AddNewRowAndElementPlaceholder
                    onClick={() => {
                      console.log("add New section clicked");
                      dispatch(addNewRow({ sectionIndex: sectionIdx }));
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
