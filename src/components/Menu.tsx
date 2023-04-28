import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Box>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      <Link to="/main">
        <Button variant="contained">Main</Button>
      </Link>
      <Link to="/views">
        <Button variant="contained">Views</Button>
      </Link>
    </Box>
  );
};

export default Menu;
