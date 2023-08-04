import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Button,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default function ProjectCard({ title, description, image, link }) {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const theme = useSelector((state) => state.mode.darkMode)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 2 }}
      className=""
    >
      <Card
        sx={{
          maxWidth: 305,
          boxShadow: `0 0 10px ${theme ? '#000000' : '#dddddd'}`,
          backgroundColor: colorTheme.secondaryBg,
          color: colorTheme.primaryText,
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <h3 className="text-xl font-bold text-start mb-2">{title}</h3>
            <p className="text-start text-md">{description}</p>
          </CardContent>
          <CardActions>
            <Button size="small" href={link}>
              View
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </motion.div>
  )
}
