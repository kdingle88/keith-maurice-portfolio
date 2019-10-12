import React from "react";

import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  gridList: {
    width: 475,
    height: 475
  },
  gridTile: {
    marginBottom: 25,
    marginTop: 25,
    border: "24px double #FC2F48",
    borderRadius: "24px"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const PortfolioGrid = () => {
  const tileData = [
    {
      img:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7c8eba11758209.560fccb845914.jpg",
      title: "Image",
      author: "author"
    },
    {
      img:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2bb34f46423091.58535ec178384.jpg",
      title: "Image",
      author: "author"
    },
    {
      img:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c242d280700927.5ce865931238e.jpg",
      title: "Image",
      author: "author"
    },
    {
      img:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/53ed9410876045.560ecc2caca93.jpg",
      title: "PixaBay",
      author: "author"
    }
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={2}
            rows={2}
            className={classes.gridTile}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default PortfolioGrid;
