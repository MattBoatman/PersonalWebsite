import React, { Component } from 'react';
import schwine from './swine-schnake.jpeg';
import mayleWagner from './mayle-wagner.jpeg';
import schafer from './schafer.jpg';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

const styles = {
  card: {
    width: 345
  },
  media: {
    height: 400
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 10,
    alignItems: 'baseline',
    flexWrap: 'wrap'
  }
};

class FantasyFootball extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div className={this.props.classes.wrapper}>
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.media}
            image={schwine}
            title="Swine/Schnake"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Swine/Schnake
            </Typography>
            <Typography gutterBottom variant="subheading" color="textSecondary">
              Platform
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="League rule changes (including veto)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Roster position changes" />
              </ListItem>
              <ListItem>
                <ListItemText primary="League sanctioned events (including dates)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Punishments" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Etc." />
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={this.handleExpandClick}
            >
              More swine stuff
            </Button>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                (This will ensure every voice is heard and unite the league. For
                those who don’t participate as much in the thread the league
                should accept text screenshots of text with a yay or nay vote).
              </Typography>
              <Typography paragraph>
                PROPOSAL NOT LAW: For a vote to be called the item to be voted
                on must be proposed, seconded, and agreed upon by a third party
                before a league vote occurs.
              </Typography>
              <Typography paragraph>
                Because my main point was made in my first two points. I’d like
                to take my final point to say this. There was a time I was
                absent from the league and thread and I haven’t been the most
                outstanding friend. I can guarantee you this: whether I’m voted
                as commissioner or not I will try my absolute best to be better.
                I want to see you guys more obviously, I can’t stress that point
                enough. I promise to establish, plan, and promote as many league
                sanctioned events as possible. That being said I will never
                judge someone for not being able to attend. We all have lives,
                wives, Jobs, kids (im positive more is to come). If there is one
                thing I’ve learned is this: the bond of this league can’t be
                broken no matter the trials and tribulations. Obviously I
                haven’t proposed any immediate changes, but at the summit I look
                forward to solid debate and a hurricane of new ideas. Thank you
                for your time.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.media}
            image={mayleWagner}
            title="Mayle/Wagner"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Mayle/Wagner
            </Typography>
            <Typography gutterBottom variant="subheading" color="textSecondary">
              Platform
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="2qb 2rb 2wr flex te kicker defense 3idp" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Remove 2 bench slots" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Remove weekly waiver limit but keep $100/season to leapfrog waiver order" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Majority trade veto vote (9/12)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Listen to any and all suggestions" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Delegate all available positions within league to members who are most well suited to fulfill duties " />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.media}
            image={schafer}
            title="Schafer/Wagner"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Schafer/Wagner
            </Typography>
            <Typography gutterBottom variant="subheading" color="textSecondary">
              Platform
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="9/12 trade veto" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Convert 1 wr slot to flex" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Add 1 defensive player" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Scheduled league get togethers when majority can attend" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Scheduled entry fee increase to $75 in 2020" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Open to suggestions from league" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(FantasyFootball);
