/* eslint-disable react/no-children-prop */
import { ReactNode, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';

type RouterProps = {
    history: BrowserHistory,
    children: ReactNode,
}
const BrowserRouter = ({ children, history } : RouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return (
    <Router
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
export default BrowserRouter;
