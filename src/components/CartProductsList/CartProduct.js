/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const CartProduct = () => {
  const theme = useTheme();

  const { colors } = theme;

  return (
    <li
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
      }}
    >
      <div>
        <img
          css={{
            height: '100px',
          }}
          src="//images.ctfassets.net/5w7hgh9abc3b/R7aTIc1EzkljeiQL5g7iV/cd995371d09dc82c6c5eb9238a34e36a/food4.png"
          alt=""
        />
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '14px 0 14px 10px',
        }}
      >
        <p>sdasd</p>
        <p>$999</p>
        <button
          css={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          remove <FaTrash />
        </button>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button>
          <FaPlus />
        </button>
        <span
          css={{
            margin: '10px 0',
          }}
        >
          1
        </span>
        <button>
          <FaMinus />
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
