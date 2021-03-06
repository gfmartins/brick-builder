import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { DND } from '../../../lib'
import ChoiceColumn from './ChoiceColumn'

import styled from 'styled-components'

const SCEmptySection = styled.div`
    padding: 20px 30px;
    background- color: #fff;
`

const SCEmptySectionColumns = styled.div`
    display: flex;
    flex- wrap: wrap;
    justify- content: space - between;
`

export class SectionEmpty extends Component {
    render() {
        const { section } = this.props

        const nbChooseColumns = [1, 2, 3, 4]

        return (
            <SCEmptySection>
                <p>Choisissez une disposition pour commencer</p>
                <SCEmptySectionColumns>
                    {nbChooseColumns.map((nbColumn, key) => {
                        return (
                            <ChoiceColumn
                                key={key}
                                nbColumn={nbColumn}
                                section={section}
                            />
                        )
                    })}
                </SCEmptySectionColumns>
            </SCEmptySection>
        )
    }
}

SectionEmpty.propTypes = {
    section: PropTypes.object.isRequired
}

export default SectionEmpty
