import * as React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const california = require('assets/images/california.jpg');

const StyledMain = styled.main`
  padding: 0.8rem;

  @media (min-width: 769px) {
    padding: 10rem;
  }
`;

const Bullet = styled.span`
  display: inline-block;
  margin: 0 0.2rem;
  transform: scale(0.8);
`;

const Caption = styled(Typography)`
  text-align: center;
`;

const IndentTypography = styled(Typography)`
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;
`;

const Media = styled(CardMedia)`
  && {
    background-position: top;
    height: 0;
    padding-top: 56.25%;
  }
`;

const ItalicTypography = styled(Typography)`
  font-style: italic;
`;

const Variant = styled.span`
  font-weight: 600;
`;

const Paragraph = styled(Typography)`
  && {
    margin-bottom: 1.2rem;
  }
`;

export const Main: React.SFC<{}> = () => {
  const bullet = <Bullet>•</Bullet>;

  return (
    <StyledMain>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <Media image={california} title="San Francisco, CA - 1979" />
            <CardContent>
              <Caption variant="caption">San Francisco, CA - 1979</Caption>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                mar{bullet}a{bullet}thon
              </Typography>
              <Typography>/ˈmerəˌTHän/</Typography>
              <ItalicTypography>noun</ItalicTypography>
              <Typography color="textSecondary">
                noun: <Variant>marathon</Variant>; plural noun:{' '}
                <Variant>marathons</Variant>
              </Typography>
              <IndentTypography>
                a long-distance running race, strictly one of 26 miles and 385
                yards (42.195 km).
              </IndentTypography>
              <Typography color="textSecondary">Origin</Typography>
              <Typography color="textSecondary">
                Marathōn -----> marathon
              </Typography>
              <IndentTypography>
                late 19th century: from Marathōn in Greece, the scene of a
                victory over the Persians in 490 BC; the modern race is based on
                the tradition that a messenger ran from Marathon to Athens (22
                miles) with the news. The original account by Herodotus told of
                the messenger Pheidippides running 150 miles from Athens to
                Sparta before the battle, seeking help.
              </IndentTypography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                Motivation
              </Typography>
              <Paragraph>
                The words of my mother over the phone even 18 years ago still
                haunt my memory, “Tom, you better sit down, it’s your father”.
                Although he was in excellent health at 69 years old, he had just
                suffered an unexpected, sudden and massive stroke. He was now
                being kept alive until I could get to Oakland to say goodbye to
                him. Twelve hours later I was withdrawing life support and
                witnessing the last few minutes of his wonderful, but too short,
                life.
              </Paragraph>
              <Paragraph>
                Besides being a great father, my dad was an adult cardiologist
                promoting good cardiovascular health to his patients. He
                practiced what he advised and became an avid runner. He’d wake
                up early each morning and run five miles, but he’d never run a
                race. In 1978, I ran my first marathon…in San Francisco. In
                those days, there was little water and energy support from race
                volunteers so Dad and Mom served as my support team. They would
                drive to various points along the course in San Francisco where
                they would cheer me on, give me a cup of water and a candy bar.
                I could see the excitement in Dad’s face. I also saw a bit of
                disappointment that he wasn’t out there running with me. Thanks
                to his help I finished that marathon. But I was in so much pain
                that I swore I would never run another marathon again. Funny how
                things can change…how minds can contemplate the previously
                inconceivable…how a death of a loved one can affect one’s life
                so profoundly.
              </Paragraph>
              <Paragraph>
                After Dad’s death, I took up running again, 66 marathons to
                date, in fact. I run in his honor. It’s intended to be an effort
                to carry the torch that he lit for his patients and extend it to
                my patients. I’m often asked what I think about during the long
                hours of these marathons. I think a lot about Dad. I think about
                his legacy. I think about my patients, some of whom are not only
                in my races but passing me by!
              </Paragraph>
              <Paragraph>
                In 2018, I will run in memory of Dad’s legacy and in honor of my
                inspirational patients who have overcome so much adversity in
                their lives and are an example to us all.{' '}
              </Paragraph>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                Dana's Thoughts
              </Typography>
              <Paragraph>
                We began making these marathon weekend trips an adventure,
                finding things to do in cities you may not expect to enjoy. We
                caught a baseball game in St. Louis on our way home from Kansas,
                enjoyed a performance of the Nutcracker in Alabama (it was
                mid-December), went to a sold-out college baseball game in
                Nebraska (not much else to do there obviously), tacked on a long
                weekend in NYC to Connecticut, rolled through Chicago/Milwaukee
                and caught another baseball game on our way to Iowa, where we
                also visited the Field of Dreams, made another trip to NYC
                between New Jersey and Rhode Island (they were a week apart),
                and experienced a couples float tank in Oklahoma.
              </Paragraph>
              <Paragraph>
                But even more special, we found ways to include our family our
                friends in some of our marathon trips. We visited with
                family/friends in Utah, Mississippi, Texas & Arkansas, made two
                week trips of Hawaii (including Aubrey & Maddie) & Alaska
                (including Sue, Whitney, Jeanne & Bill), had a magical time at
                Disney World with Jenny & Maddie in Florida, traveled to New
                Mexico with Mark, Olivia, McKenna & Emmy, where Mark ran the
                marathon with Tom, added a few days in San Diego after Nevada to
                see Denise, Sue, Whitney & JR, spent a night with Jenn, Mark &
                Ryan as we headed to Iowa, and explored South Dakota with my
                parents. In addition to Hawaii & Florida, Maddie was part of our
                original marathon traveling team having also joined us for
                Tennessee, Michigan, Pennsylvania, Alabama & Texas. We now look
                forward to bringing our family together to celebrate Tom’s 50th
                state in Montana! We’ve enjoyed some really great Italian
                restaurants (carb-loading for race day), attended Mass in
                small-town churches and large cathedrals, golfed many golf
                courses, and tasted local craft beers (mostly me)…all over the
                country! It’s been quite an incredible journey and I certainly
                got the easier end of the deal!
              </Paragraph>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledMain>
  );
};

Main.displayName = 'Main';
