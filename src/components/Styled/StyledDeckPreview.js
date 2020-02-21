import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Card} from 'antd';

const StyledDeckPreview = ({
    text,
    type = 'inner',
    size = 'default',
    icon,
    loading,
    block,
    hoverable,
    deck,
    ...props
}) => {
    return (
        <StyledAntdCard
        type={type}
        size={size}
        icon={icon}
        loading={loading && 'loading'}
        block={block && 'block'}
        {...props}        
        >
        {text}
        </StyledAntdCard>
    );
};

StyledCardPreview.propTypes = {
    text: PropTypes.string,
    types: PropTypes.oneOf(['inner']),
    size: PropTypes.oneOf(['default']),
    icon: PropTypes.string,
    loading: PropTypes.bool,
    block: PropTypes.bool,
    hoverable: PropTypes.bool,
}

const StyledDeckPreview = styled(Card)`

`
export default StyledDeckPreview;