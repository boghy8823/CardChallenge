import React, { useState, useEffect } from "react";
import ROUTES from "../../constants/routes";
import { PageWrapper, Container, Button, Input } from "./Home.styled";
import useFieldChange from "../../hooks/useFieldChange";
import storage from "../../helpers/storage";
import { formatDuration } from "../../helpers/timerHelper";
import NavigationLink from "../../components/NavigationLink";
// import { updateCurrentRecord } from  "../../actions";

const Home = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [sessionName, setSessionName] = useFieldChange("");

  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        setElapsedTime(elapsedTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [elapsedTime, timerStarted]);

  useEffect(() => {
    const {elapsedTime } = JSON.parse(storage.getItem("session"));

    if (elapsedTime){
        setElapsedTime(elapsedTime);
    }
  }, [setSessionName]);

  const onStart = () => {
    setTimerStarted(true);
  };

  const onStop = () => {
    setTimerStarted(false);
  };

  const onReset = () => {
      setTimerStarted(false);
      setElapsedTime(0);
  }
  
  const onSave = () => {
    storage.setItem("session", JSON.stringify({ sessionName, elapsedTime }));
  };

  return (
    <PageWrapper>
      <Container>
          <NavigationLink route={ROUTES.HOME}>Home</NavigationLink>
          <NavigationLink route={ROUTES.HISTORY}>History</NavigationLink>
        <p>Session Name: {sessionName}</p>
        <p>{formatDuration(elapsedTime)}</p>
        <Input
          id="name"
          name="name"
          label="Session Name"
          onChange={setSessionName}
          value={sessionName}
        />
        <Button onClick={onStart} disabled={elapsedTime > 0}>Start</Button>
        <Button onClick={onStop} disabled={elapsedTime === 0}>Stop</Button>
        <Button onClick={onSave} disabled={elapsedTime === 0 || !sessionName}>Save</Button>
        <Button onClick={onReset} disabled={elapsedTime === 0}>Reset</Button>
      </Container>
    </PageWrapper>
  );
};

Home.propTypes = {};

export default Home;
