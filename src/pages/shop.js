import React, { Fragment } from "react";
import styles from "../styles/Shop";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import mayaCalender from "../assets/mayacalender.png";
import mayacurrency from "../assets/mayacurrency.png";
import mayatoys from "../assets/mayatoys.png";
import mayawarwear from "../assets/mayawarwear.png";
import mayawomencloth from "../assets/mayawomencloth.png";
import mayaweapons from "../assets/mayaweapons.png";
import Fade from "react-reveal/Fade"
import paintings from "../assets/paintings.jpg";
import sculpture from "../assets/sculpture.jpg";
import jewelery from "../assets/jewelery.jpg";

const HomeItems = ({ classes }) => {
	return (
		<>
			<Typography variant="h4" className={classes.mainText}>
				SHOP
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				className={classes.itemGrid}
			>
				<Fade left>
				<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={mayaCalender}
							alt="mayacalender"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "12rem" }}
							>
								Calender
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							color="primary"
							style={{
								marginLeft: "14rem",
								color: "black",
								marginTop: "-2rem",
							}}
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade top>
				<Card className={classes.root}>
					<CardActionArea>
						<img className={classes.media} src={mayatoys} alt="mayatoys" />
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "15rem" }}
							>
								Toys
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "15rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade right>
				<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={mayacurrency}
							alt="mayacurrency"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "12rem" }}
							>
								Currency
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "14rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade left>
					<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={mayawarwear}
							alt="mayawarwear"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "12rem" }}
							>
								War Wear
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "14rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade bottom>
				<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={mayawomencloth}
							alt="maya women cloths"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "9rem" }}
							>
								Women cloths
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "12rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade right>
				<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={mayaweapons}
							alt="maya weapons"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "12rem" }}
							>
								Weapons
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "14rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade left>
					<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={paintings}
							alt="mayawarwear"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "12rem" }}
							>
								painting
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "14rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade bottom>
				<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={sculpture}
							alt="maya sculpture"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "9rem" }}
							>
								Sculptures
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "12rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
				<Fade right>
				<Card className={classes.root}>
					<CardActionArea>
						<img
							className={classes.media}
							src={jewelery}
							alt="maya jewelery"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								style={{ marginLeft: "12rem" }}
							>
								Jewelery
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="medium"
							style={{
								marginLeft: "14rem",
								color: "black",
								marginTop: "-2rem",
							}}
							color="primary"
						>
							$ 500
						</Button>
					</CardActions>
				</Card>
				</Fade>
			</Grid>
		</>
	);
};

export default withStyles(styles)(HomeItems);
