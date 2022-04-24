import { Heading } from "@chakra-ui/react";
import React from "react"

export const Title = ({ title }: { title: string }) => <Heading color="white" textShadow="2px 3px 5px rgba(0,0,0,0.5);" mb={2} px={10} data-testid="title">{title}</Heading>
