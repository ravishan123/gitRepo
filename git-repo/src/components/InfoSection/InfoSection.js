import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import gitfoot from "../../images/gitfoot.json"
import DisplayLottie from "../../components/DisplayLotties/DisplayLottie";


import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  
} from './InfoSection.elements';
import { useSelector,useDispatch } from 'react-redux';
import { increment } from './../../actions/index';

import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,


} from '@material-ui/core/';
function InfoSectionAbout({
  
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const [myValue, setValue] = useState('') 


  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button big fontBig primary={primary}   onClick={handleClickOpen}>
                    {buttonLabel}
                  </Button>

                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Hello 👋 </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Drop Your Name Here.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your Name"
                        type="name"
                        fullWidth
                        value={myValue} 
			                  onChange={(e) => setValue(e.target.value)}
                        onClick={()=>dispatch(increment(myValue))} 
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                       Close
                      </Button>
                      <Button onClick={handleClose} color="primary">
                      DONE
                      </Button>
                    </DialogActions>
                  </Dialog>
               
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
               
                <DisplayLottie animationData={gitfoot} />

              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSectionAbout;
