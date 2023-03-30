import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const BreadCrumb = () => {
    return (
        <Breadcrumb spacing='8px' separator={'|'}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>1st tab</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>2nd tab</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>3rd tab</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default BreadCrumb