import React from 'react'
import {
  Button,
  Tile,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Container,
  Content,
  Control,
  Field,
} from '@brightleaf/elements'

export default () => {
  return (
    <>
      <Hero isBold isPrimary>
        <HeroBody>
          <Title>CardBattles - Intro</Title>
          <SubTitle>How to play</SubTitle>
        </HeroBody>
      </Hero>
      <br />
      <Container>
        <Tile isAncestor>
          <Tile isParent>
            <Tile isChild isBox>
              <Title as="p">Intro</Title>
              <SubTitle as="p">Introduction to the game</SubTitle>
              <Content>
                Learn about the game and how to play
                <br />
                <Field isGrouped isGroupedCentered>
                  <Control>
                    <Button isPrimary>Intro</Button>
                  </Control>
                </Field>
              </Content>
            </Tile>
            <Tile isChild isBox>
              <Title as="p">Two</Title>
              <SubTitle as="p">Subtitle</SubTitle>
            </Tile>
            <Tile isChild isBox>
              <Title as="p">Three</Title>
              <SubTitle as="p">Subtitle</SubTitle>
            </Tile>
            <Tile isChild isBox>
              <Title as="p">Four</Title>
              <SubTitle as="p">Subtitle</SubTitle>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </>
  )
}
