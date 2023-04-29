// import { useDispatch, useSelector } from 'react-redux';
// import { changeLang } from '../store/slices/languageSlice';
// import { useAppSelector } from '../store/store';

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Button,
  IconButton,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { data, IRows } from '../data/table';

const Main = () => {
  // const dispatch = useDispatch();
  // const language = useAppSelector((state) => state.language.name);
  // REDUX REACT
  // HOOK FORM
  // YUP

  // interface ICheckBoxes {
  //   id: number;
  //   checked: boolean;
  // }

  interface IEditMode {
    id: number;
    mode: boolean;
  }

  interface IEditRow {
    name: string;
    age: number;
    date: Date;
    bio: string;
  }

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [rows, setRows] = useState<IRows[]>([]);

  const [editMode, setEditMode] = useState<IEditMode | undefined>(undefined);

  const [editRow, setEditRow] = useState<IEditRow | undefined>(undefined);

  useEffect(() => {
    setRows(data);
  }, []);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const numberId = parseInt(id);

    let selected = 0;

    setRows((prev) =>
      prev.map((item) => {
        if (item.checked === true) {
          selected++;
        }
        if (item.id === numberId) {
          return { ...item, checked: checked };
        }
        return item;
      })
    );
    selected === rows.length ? setIsCheckAll(true) : setIsCheckAll(false);
  };

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsCheckAll((prev) => !prev);

    setRows((prev) =>
      prev.map((item) => {
        if (item.checked !== checked) {
          return { ...item, checked: checked };
        }
        return item;
      })
    );
  };

  const handleShow = () => {
    console.log(rows);
  };

  const handleDelete = () => {
    const newRows = rows.filter((row) => !row.checked);
    setRows(newRows);
  };

  const handleEditClick = (id: number) => {
    setEditMode((prev) => ({ id, mode: !prev?.mode }));
    const newEditRow = rows
      .filter((row) => row.id === id)
      ?.map((item) => ({
        name: item.name,
        age: item.age,
        date: item.dateOfBirth,
        bio: item.bio,
      }));

    // const obj = newEditRow.reduce((o, item) =>
    //   Object.assign(o, { [item.key]: item.value }, {})
    // );

    setEditRow({ ...newEditRow[0] });

    // console.log({ ...newEditRow[0] });
  };

  const { t } = useTranslation();

  const table = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">
              <Checkbox
                checked={isCheckAll}
                onChange={(e) => handleSelectAll(e)}
              />
            </TableCell>
            <TableCell>{t('main.table.header.name')}</TableCell>
            <TableCell align="right">{t('main.table.header.age')}</TableCell>
            <TableCell align="right">
              {t('main.table.header.dateOfBirth')}
            </TableCell>
            <TableCell align="right">{t('main.table.header.bio')}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                <Checkbox
                  id={row.id.toString()}
                  onChange={(e) => handleSelect(e)}
                  checked={row.checked}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id === editMode?.id && editMode?.mode ? (
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    type="text"
                    value={editRow?.name}
                  />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell align="right">
                {row.id === editMode?.id && editMode?.mode ? (
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    type="number"
                    value={editRow?.age}
                  />
                ) : (
                  row.age
                )}
              </TableCell>
              <TableCell align="right">
                {row.id === editMode?.id && editMode?.mode ? (
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    type="date"
                    value={editRow?.date}
                  />
                ) : (
                  `${row.dateOfBirth.getDate()}/${row.dateOfBirth.getMonth()}/${row.dateOfBirth.getFullYear()}`
                )}
              </TableCell>
              <TableCell align="right">
                {row.id === editMode?.id && editMode?.mode ? (
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    type="text"
                    value={editRow?.bio}
                  />
                ) : row.bio.length > 10 ? (
                  `${row.bio.substring(0, 9)}...`
                ) : (
                  row.bio
                )}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="more"
                  onClick={() => handleEditClick(row.id)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <>
      {table}
      <Button variant="outlined" onClick={handleShow}>
        Show
      </Button>
      <Button variant="outlined" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

export default Main;
