import React from 'react'
import { Box, Flex, Spinner } from "@chakra-ui/react"
import { useInit } from "../../hooks/useInit"

export const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
    const { isLoading } = useInit()

    if (isLoading) {
        return (
            <Flex position="absolute" top="0" bottom="0" left="0" right="0" alignItems="center" justifyContent="center">
                <Spinner />
            </Flex>
        )
    }

    return <Box bgColor="gray.900" h="full">{children}</Box>
}