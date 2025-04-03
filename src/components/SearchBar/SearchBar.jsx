import { Box, Button, IconButton, TextField } from '@mui/material';

export const SearchBar = ({searchValue, handleSearchValue, handleSearch }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
      <TextField
        label={'Ingresa el producto a buscar'}
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          width: '40%',
        }}
        value={searchValue}
        onChange={(e) => handleSearchValue(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          backgroundColor: '#0060c2',
          height: '3rem',
        }}
      >
        <i className="fa-solid fa-magnifying-glass" />
      </Button>
    </Box>

  )
}