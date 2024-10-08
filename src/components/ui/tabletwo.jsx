// components/ui/table.jsx
import React from 'react';

const Table = ({ children }) => {
  return (
    <table className="table">
      {children}
    </table>
  );
};

const TableHeader = ({ children }) => <thead>{children}</thead>;
const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableRow = ({ children }) => <tr>{children}</tr>;
const TableHead = ({ children }) => <th>{children}</th>;
const TableCell = ({ children }) => <td>{children}</td>;

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

export default Table; // Default export for Table and its components
