import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { CompetitionContext } from "./CompetitionProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import { Button, ListGroup, Accordion } from "react-bootstrap"

export const CompetitionList = () => {

const {getCompetition, competitions } = useContext(CompetitionContext)

useEffect(() =>
    getCompetition()
)

return (
<ListGroup horizontal>
  <ListGroup.Item>This</ListGroup.Item>
  <ListGroup.Item>ListGroup</ListGroup.Item>
  <ListGroup.Item>renders</ListGroup.Item>
  <ListGroup.Item>horizontally!</ListGroup.Item>
</ListGroup>
    )
}