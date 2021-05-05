import React from "react";
import * as ROUTES from "../constants/routes";
import { Page, CardContainer } from "../components";

export function PageContainer() {
  return (
    <>
      <Page>
        <Page.Header>
          <Page.Div></Page.Div>
          <Page.Menu>
            <Page.MenuItem key="1" to={ROUTES.HOME}>
              PRINCE'S THEATRE
            </Page.MenuItem>
          </Page.Menu>
        </Page.Header>
      </Page>
      <Page.Content>
        <Page.Title>Classic Movies At Home</Page.Title>
        <Page.Title level={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Page.Title>

        <CardContainer></CardContainer>
      </Page.Content>
    </>
  );
}
