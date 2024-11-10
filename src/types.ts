export interface ElementProperties {
  /**
   * Unique identifier for the element.
   */
  id: string;

  /**
   * Type of the element.
   * Could represent different types of components, such as "text", "image", etc.
   */
  type: string;

  /**
   * Optional properties specific to the element type.
   * These properties vary depending on the type of element.
   */
  props?: {
    /**
     * Optional text content for the element.
     * Commonly used for text-based elements.
     */
    text?: string;

    /**
     * Optional styles applied to the element.
     * Uses standard React CSS properties.
     */
    styles?: React.CSSProperties;

    /**
     * Optional source URL for the element, if it represents an image or media item.
     */
    src?: string;

    /**
     * Optional alternative text for an image element.
     * Used as the `alt` attribute for accessibility.
     */
    alt?: string;

    /**
     * Optional array of items, typically for list-based elements.
     * Used to render lists or dropdown items.
     */
    items?: string[];

    /**
     * Optional flag indicating if the list should be ordered.
     * Applies to list elements, with true indicating an ordered list.
     */
    ordered?: boolean;
  };
}

export interface ComponentProperties {
  /**
   * Unique identifier for the component.
   */
  id: string;

  /**
   * Array of elements contained within the component.
   * Each element is defined by `ElementProperties`.
   */
  elements: Array<ElementProperties>;

  /**
   * Specifies the span of the component across different breakpoints.
   * Each entry in the array represents the number of columns spanned at a specific breakpoint.
   */
  span: number[];
}

export interface EmptyRow {
  /**
   * Unique identifier for the row.
   * Can be a number or a string.
   */
  id: number | string;

  /**
   * Array of component properties within the row.
   * Each component is defined by `ComponentProperties`.
   */
  components: ComponentProperties[];

  /**
   * Optional styles applied to the row.
   * Uses standard React CSS properties.
   */
  rowStyles?: React.CSSProperties;

  /**
   * Optional flag indicating if the row is disabled.
   * When true, the row is not interactive.
   */
  isDisabled?: boolean;

  /**
   * Optional flag indicating if the row is pinned.
   * When true, the row remains fixed in position.
   */
  isPinned?: boolean;

  /**
   * Can add more properties related to rows here
   */
}

type LayoutAttributes = {
  /**
   * Optional index of the section that the layout applies to.
   */
  sectionIdx?: number;

  /**
   * Mode indicating whether the layout is in "new" mode (for creating a new layout)
   * or "existing" mode (for editing an existing layout).
   */
  mode: "new" | "existing";
};

type ElementAttributes = {
  /**
   * Optional index of the section containing the element.
   */
  sectionIdx?: number;

  /**
   * Optional index of the row within the section that contains the element.
   */
  rowIdx?: number;

  /**
   * Optional index of the column within the row that contains the element.
   */
  columnIdx?: number;

  /**
   * Optional index of the element within the column.
   */
  elementIdx?: number;

  /**
   * Mode indicating whether the element is being created ("new") or modified ("existing").
   * Optional; defaults to undefined if not specified.
   */
  mode?: "new" | "existing";
};

type EditElementAttributes = {
  /**
   * Index of the section containing the element to be edited.
   */
  sectionIdx: number;

  /**
   * Index of the row within the section that contains the element to be edited.
   */
  rowIdx: number;

  /**
   * Index of the column within the row that contains the element to be edited.
   */
  columnIdx: number;

  /**
   * Index of the element within the column that is being edited.
   */
  elementIdx: number;

  /**
   * Type of the element being edited.
   * This can be a string describing the element type (e.g., "text", "image").
   */
  type: string;
};

export interface StoreState {
  /**
   * An array of section objects, each containing a unique identifier and an array of rows.
   */
  sections: {
    /**
     * Unique identifier for each section.
     * Can be a number or a string.
     */
    id: number | string;

    /**
     * Array of rows within the section.
     * Each row is an instance of `EmptyRow`.
     */
    rows: EmptyRow[];
  }[];

  /**
   * Flag indicating if the preview mode is enabled.
   * Optional; if not set, defaults to `false`.
   */
  isPreviewMode?: boolean;

  /**
   * The current view mode of the application.
   * Can be either "desktop" or "mobile".
   */
  viewMode: "desktop" | "mobile";

  /**
   * Configuration for the columns drawer UI.
   */
  columnsDrawerConfig: {
    /**
     * Flag indicating if the columns drawer is open.
     */
    open: boolean;

    /**
     * Layout attributes for the columns drawer.
     * Should be defined in the `LayoutAttributes` interface.
     */
    layoutAttributes: LayoutAttributes;
  };

  /**
   * Configuration for the elements drawer UI.
   */
  elementsDrawerConfig: {
    /**
     * Flag indicating if the elements drawer is open.
     */
    open: boolean;

    /**
     * Element attributes for the elements drawer.
     * Should be defined in the `ElementAttributes` interface.
     */
    elementAttributes: ElementAttributes;
  };

  /**
   * Configuration for the edit element drawer UI.
   */
  editElementDrawerConfig: {
    /**
     * Flag indicating if the edit element drawer is open.
     */
    open: boolean;

    /**
     * Attributes for editing elements in the edit element drawer.
     * Should be defined in the `EditElementAttributes` interface.
     */
    editElementAttributes: EditElementAttributes;
  };
}
