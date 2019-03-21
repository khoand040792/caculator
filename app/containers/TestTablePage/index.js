import React from 'react';
import TablesUI from 'components/TablesUI';

let counter = 0;
function createData(code, num1, num2, name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, code, num1, num2, name, calories, fat, carbs, protein };
}

const rows = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

class TestTable extends React.Component {
  state = {};

  render() {
    return (
      <TablesUI
        headerData={rows}
        data={[
          createData(
            '70000012',
            'Sóng nhựa-D610xR420xC390 logo xanh dương',
            11256,
            'Cupcake',
            305,
            3.7,
            67,
            4.3,
          ),
          createData('Mã g', 34566, 1000, 'Donut', 452, 25.0, 51, 4.9),
          createData('Mã a', 123888, 99999999, 'Eclair', 262, 16.0, 24, 6.0),
          createData(
            'Mã d bdfhfhf',
            100788686867,
            97779,
            'Frozen yoghurtgg gdgd',
            159,
            6.0,
            24,
            4.0,
          ),
          createData('Mã b', 123, 156, 'Gingerbread', 356, 16.0, 49, 3.9),
          createData('Mã a', 45, 156, 'Honeycomb', 408, 3.2, 87, 6.5),
          createData('Mã t', 123, 156, 'Ice cream ', 237, 9.0, 37, 4.3),
          createData('Mã a', 123, 478, 'Jelly Bean', 375, 0.0, 94, 0.0),
          createData('Mã a', 123, 65, 'KitKat', 518, 26.0, 65, 7.0),
          createData('Mã a', 123, 156, 'Lollipop', 392, 0.2, 98, 0.0),
          createData('Mã a', 123, 156, 'Marshmallow', 318, 0, 81, 2.0),
          createData('Mã a', 123, 156, 'Nougat', 360, 19.0, 9, 37.0),
          createData('Mã a', 123, 156, 'Oreo', 437, 18.0, 63, 4.0),
        ]}
      />
    );
  }
}

export default TestTable;
