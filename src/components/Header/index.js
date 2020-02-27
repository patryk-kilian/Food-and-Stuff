/**@jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  const theme = useTheme();

  const { colors, container } = theme;

  return (
    <header
      css={{
        backgroundColor: colors.primary,
        padding: '10px 0',
      }}
    >
      <div
        css={{
          maxWidth: container.base,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            fontSize: '40px',
          }}
        >
          FS
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <p>cart</p>
          <button
            css={{
              position: 'relative',
            }}
          >
            <FaShoppingBag
              css={{
                width: '3rem',
                height: '3rem',
              }}
            />
            <span
              css={{
                position: 'absolute',
                fontSize: '1.2rem',
                top: '0',
                right: '0',
                background: '#fff',
                color: '#000',
              }}
            >
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
