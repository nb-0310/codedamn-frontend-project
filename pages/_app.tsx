import React, {ReactElement, ReactNode} from "react";
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import "../styles/globals.css"
import NavbarContainer from "./navbar";
import { Inter } from "next/font/google";
import { SkillsProvider } from "../Contexts/SkillsContext";
import { ProfileProvider } from "../Contexts/ProfileContext";
import { ProjectsProvider } from "../Contexts/ProjectsContext";
import { PlaygroundProvider } from "../Contexts/PlaygroundContext";
import { EducationProvider } from "../Contexts/EducationContaxt";
import { ExperienceProvider } from "../Contexts/ExperienceContext";
import { SocialsProvider } from "../Contexts/SocialsContext";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <SocialsProvider>
      <ExperienceProvider>
        <EducationProvider>
          <PlaygroundProvider>
            <ProjectsProvider>
              <ProfileProvider>
                <SkillsProvider>
                  <NavbarContainer>
                    <div id="root" className={inter.className}>
                      <Component {...pageProps} />
                    </div>
                  </NavbarContainer>
                </SkillsProvider>
              </ProfileProvider>
            </ProjectsProvider>
          </PlaygroundProvider>
        </EducationProvider>
      </ExperienceProvider>
    </SocialsProvider>
  );
};

export default App;