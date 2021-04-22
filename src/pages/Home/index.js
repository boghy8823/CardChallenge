import React, { useState, useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import ROUTES from "../../constants/routes";
import { PageWrapper, Container, Button, Input } from "./Home.styled";
import useFieldChange from "../../hooks/useFieldChange";
import storage from "../../helpers/storage";
import { formatDuration } from "../../helpers/timerHelper";
import NavigationLink from "../../components/NavigationLink";
import { saveSession, fetchSessions } from "../../actions";

const Home = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [sessionName, setSessionName] = useFieldChange("");
  const dispatch = useDispatch();
  const currentSession = useSelector(state => state.currentSession)

  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        setElapsedTime(elapsedTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [elapsedTime, timerStarted]);

  useEffect(() => {
    const { elapsedTime } = JSON.parse(storage.getItem("session"));

    if (elapsedTime) {
      setElapsedTime(elapsedTime);
    }
  }, [setSessionName]);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  const onSave = () => {
    storage.setItem("session", JSON.stringify({ sessionName, elapsedTime }));
    dispatch(saveSession({ sessionName, elapsedTime }));
    setTimerStarted(false);
    setElapsedTime(0);
  };

  const onStart = () => {
    setTimerStarted(true);
  };

  const onStop = () => {
    setTimerStarted(false);
    setElapsedTime(0);
  };

  return (
    <PageWrapper>
      <Container>
        <NavigationLink route={ROUTES.HOME}>Home</NavigationLink>
        <NavigationLink route={ROUTES.HISTORY}>History</NavigationLink>
        <p>Session Name: {sessionName}</p>
        <p>{formatDuration(elapsedTime)}</p>
        <p>Current Session: {currentSession || ""}</p>
        <Input
          id="name"
          name="name"
          label="Session Name"
          onChange={setSessionName}
          value={sessionName}
          placeholder="What are you working on?"
        />
        <Button onClick={onStart}>Start</Button>
        <Button onClick={onStop}>Stop</Button>
        <Button onClick={onSave} disabled={!sessionName}>
          Save
        </Button>
      </Container>
    </PageWrapper>
  );
};

Home.propTypes = {};


export default Home;

