/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL section publication component.
 */

// Core dependencies
import React, { FC } from "react";

// App dependencies
import ButtonSize from "../../button/button-size";
import ButtonTheme from "../../button/button-theme";
import ButtonCta from "../../button-cta/button-cta";
import { PublicationCloudStaticQuery } from "../../../hooks/publication-cloud-query";
import PublicationCard, {
  IPublicationCard,
} from "../publication-card/publication-card";
import Section from "../section/section";
import SectionAddendum from "../section/section-addendum/section-addendum";
import SectionContent from "../section/section-content/section-content";
import SectionContentPosition from "../section/section-content-position/section-content-position";

// Styles
import {
  sectionCards,
  sectionCTA,
  sectionHero,
} from "./section-publication.module.css";

const SectionPublication: FC = (): JSX.Element => {
  const frontmatter = PublicationCloudStaticQuery();
  const hero = frontmatter.sectionSubHeader;
  const publicationCards: IPublicationCard[] = frontmatter.publications;
  /* Divide the publications in half - and display on the LHS and RHS of the section. */
  const half = Math.ceil(publicationCards.length / 2);

  return (
    <Section>
      {/* Section Content - LHS. */}
      <SectionContent position={SectionContentPosition.DEFAULT_LEFT}>
        {/* Heading */}
        <>Recent Publications</>
        {/* Hero */}
        {hero ? <h4 className={sectionHero}>{hero}</h4> : null}
        {/* Content */}
        <div className={sectionCards}>
          {publicationCards.slice(0, half).map((card) => (
            <PublicationCard key={card.title} publicationCard={card} />
          ))}
        </div>
        {/* CTAs */}
        {null}
      </SectionContent>
      {/* Section Content - RHS. */}
      <SectionContent position={SectionContentPosition.DEFAULT_RIGHT}>
        {/* Heading */}
        {null}
        {/* Hero */}
        {null}
        {/* Content */}
        <div className={sectionCards}>
          {publicationCards.slice(half).map((card) => (
            <PublicationCard key={card.title} publicationCard={card} />
          ))}
        </div>
        {/* CTAs */}
        {null}
      </SectionContent>
      {/* Section Addendum */}
      <SectionAddendum>
        <div className={sectionCTA}>
          <ButtonCta
            attributeHREF="/overview/cite-anvil"
            buttonSize={ButtonSize.LARGE}
            buttonTheme={ButtonTheme.SECONDARY}
          >
            Cite AnVIL
          </ButtonCta>
        </div>
      </SectionAddendum>
    </Section>
  );
};

export default SectionPublication;
