import { TableComponentEnum } from "../enum";

export interface IHeader {
  id: string;
  name: string;
  hidden: boolean;
  type: TableComponentEnum;
  width?: number;
  tooltip?: string;
}

export interface IMetaData {
  isNextPage: boolean;
  totalCount: number;
}

export interface ICustomTablePagination {
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}
