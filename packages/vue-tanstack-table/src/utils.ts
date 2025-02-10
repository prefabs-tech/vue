import { CellAlignmentType, CellDataType } from "./types";

export const getAlignValue = ({
  align,
  dataType,
}: {
  align?: CellAlignmentType;
  dataType?: CellDataType;
}) => {
  if (align) {
    return align;
  }

  if (dataType == "other") {
    return "center";
  } else if (dataType == "number" || dataType == "currency") {
    return "right";
  } else {
    return "left";
  }
};
