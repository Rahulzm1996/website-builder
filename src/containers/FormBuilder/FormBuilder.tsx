import React from "react";
import { SectionContainer } from "../../components/SectionContainer";
import { RowContainer } from "../../components/RowContainer";
import { ElementsDrawer } from "../ElementsDrawer";
import { ColumnLayoutDrawer } from "../ColumnLayoutDrawer";
import { useSelector } from "react-redux";
import { ComponentTypes, ComponentTypesMap, StoreState } from "../../contants";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import Stack from "@mui/material/Stack";
import {
  addElement,
  addNewRow,
  toggleAddElementsDrawer,
  toggleColumnDrawer,
} from "../../store/formBuilderSlice";
import Box from "@mui/material/Box";
import {
  AddNewRowOrElement,
  CustomImage,
  CustomList,
  DynamicElementContainer,
  ElementContainer,
  Headline,
  Paragraph,
  SubHeadline,
} from "../../components";
import { ComponentProperties } from "../../types";
import { SegmentedControl } from "../../components/SegmentedControl";
import { Grid, Grid2 } from "@mui/material";
import { ElementSettingDrawer } from "../ElementSettingDrawer";

interface RenderColumnComponent {
  sectionIdx: number;
  rowIdx: number;
  columnIdx: number;
  singleRowComponent: ComponentProperties;
}

const FormBuilder = () => {
  const dispatch = useFormBuilderDispatch();
  const {
    sections,
    columnsDrawerConfig,
    elementsDrawerConfig,
    editElementDrawerConfig,
  } = useFormBuilderSelector((state) => state.formBuilder);
  const { open: showColumnDrawer } = columnsDrawerConfig || {};
  const { open: showElementsDrawer } = elementsDrawerConfig || {};
  const { open: showEditElementsDrawer } = editElementDrawerConfig || {};

  console.log("sections ", { sections, columnsDrawerConfig });

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
          <Grid
            item
            xs={12} // 100% width on extra-small screens (1 item per row)
            sm={6} // 50% width on small screens (2 items per row)
            md={4} // 33.33% width on medium screens (3 items per row)
            lg={3} // 25% width on large screens (4 items per row)
            xl={2} // 20% width on extra-large screens (5 items per row)
            // sx={{
            //   // flexBasis: "200px", // Minimum width of 200px
            //   flexGrow: 1, // Allow items to grow to fill space
            //   maxWidth: "100%", // Prevent items from overflowing
            // }}
            key={columnIdx}
            // className="column"
          >
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
          </Grid>
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

  return (
    <Stack sx={{ width: "100%", height: "100%", flex: 1, overflow: "hidden" }}>
      <Box sx={{ padding: "20px", width: "100%", backgroundColor: "#ddeefe" }}>
        <SegmentedControl
          onClick={(value) => console.log("formbuilder : ", { value })}
        />
      </Box>
      <Stack sx={{ width: "100%", height: "100%", flex: 1, overflow: "auto" }}>
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
      </Stack>

      <ElementsDrawer open={showElementsDrawer} />
      <ColumnLayoutDrawer open={showColumnDrawer} />
      <ElementSettingDrawer open={showEditElementsDrawer} />
    </Stack>
  );
};

export default FormBuilder;
