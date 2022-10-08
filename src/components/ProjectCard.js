import React, { useState } from "react";

import {
  Author,
  Avatar,
  Card,
  CardBody,
  CardMedia,
  CardTitle,
  CtaGrp,
  CtaLink,
  Featured,
  FeatureTitle,
  Info,
  MetaInfo,
  MetaList,
  MetaListItem,
  Price,
  PriceInfo,
  PriceText,
  Status,
  StatusRibbon,
  Tags,
  TagsCta,
} from "./ProjectCardStyle";

const ProjectCard = ({ data }) => {
  const [isHovered, setHovered] = useState(false);

  const animateCardMedia = isHovered ? { height: "170px" } : { height: "auto" };
  const showMeta = { opacity: 1, height: "auto" };
  const hideMeta = { opacity: 0, height: 0 };
  const animateMeta = isHovered ? hideMeta : showMeta;
  const animateMetaList = isHovered ? showMeta : hideMeta;
  const transition = {
    duration: 0.25,
    type: "spring",
    bounce: 0.2,
    ease: "easeIn",
  };
  return (
    <>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        key={data?.id}
      >
        <CardMedia animate={animateCardMedia} transition={transition}>
          <img src={data?.projectImage} alt="project" />
          {data?.fundStatus === 2 && (
            <Featured>
              <FeatureTitle>Ended !</FeatureTitle>
            </Featured>
          )}
          <StatusRibbon fundStatus={data?.fundStatus}>
            <Status>
              {data?.fundStatus === 1 ? "Funding Is Alive" : "Funding Ended !"}
            </Status>
          </StatusRibbon>
        </CardMedia>

        {/* card body */}
        <CardBody>
          <CardTitle>
            <h5>{data?.projectTitle}</h5>
          </CardTitle>

          {!isHovered && (
            <MetaInfo animate={animateMeta}>
              <Author>
                <Avatar>
                  <img src={data?.projectImage} alt="project" />
                </Avatar>
                <Info>
                  <span>Creator</span>
                  <h4>{data?.creatorName}</h4>
                </Info>
              </Author>
              <PriceInfo>
                <span>Funds Required</span>
                <Price>
                  <PriceText>{data?.fundsRequired}</PriceText>
                </Price>
              </PriceInfo>
            </MetaInfo>
          )}

          <TagsCta animate={animateMetaList}>
            <Tags>
              <span>milestone</span>
            </Tags>

            <CtaGrp>
              <CtaLink href="/"> Contract </CtaLink>
              <CtaLink href="/"> Escrow </CtaLink>
            </CtaGrp>
          </TagsCta>

          <MetaList animate={animateMetaList}>
            <MetaListItem>
              <div>Funds Raised</div>
              <div>{data?.metaList?.fund_1}</div>
            </MetaListItem>
            <MetaListItem>
              <div>Funds Raised</div>
              <div>{data?.metaList?.fund_2}</div>
            </MetaListItem>
            <MetaListItem>
              <div>Soft Cap</div>
              <div>{data?.metaList?.soft_cap}</div>
            </MetaListItem>
            <MetaListItem>
              <div>Investors</div>
              <div>{data?.metaList?.investor_count}</div>
            </MetaListItem>
          </MetaList>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
