import React, { ReactElement } from "react";
import { IHeader } from "../interface";
import { Box, TableCell, TableHead, TableRow, Tooltip } from "@mui/material";

interface ICustomTableHeadProps {
  headerField: IHeader[];
}

/**
 * Custom Table Head Component
 * @param {ICustomTableHeadProps} props
 * @returns {ReactElement}
 */
export function CustomTableHead(props: ICustomTableHeadProps): ReactElement {
  const { headerField } = props;
  return (
    <TableHead>
      <TableRow>
        {headerField.map((field: IHeader,index) => {
          if (field.hidden) {
            return null;
          }
          return (
            <TableCell key={index}>
              <Tooltip title={field.tooltip} arrow followCursor>
                <Box sx={field.width ? { width: `${field.width}px` } : {}}>
                  {field.name}
                </Box>
              </Tooltip>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
