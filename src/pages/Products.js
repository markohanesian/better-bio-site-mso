import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

export default function Products({ product }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      );
}
