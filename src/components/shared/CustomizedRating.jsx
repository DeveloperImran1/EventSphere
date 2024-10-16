import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { useState } from 'react'; // Import useState

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const CustomizedRating = () => {
  const [ratingValue, setRatingValue] = useState(2); // State to store the selected rating value

  // Function to handle rating change
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue); // Update state with the selected value
    console.log("Selected Rating:", newValue); // Log the selected rating value
  };

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <StyledRating
        name="customized-color"
        value={ratingValue} // Bind the state value
        onChange={handleRatingChange} // Event handler to capture selected value
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="p">Selected Rating: {ratingValue}</Typography> {/* Display the selected rating */}
    </Box>
  );
};

export default CustomizedRating;
