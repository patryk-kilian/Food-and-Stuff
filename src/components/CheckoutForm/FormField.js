/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const FormField = ({ label, type, name, placeholder, required }) => {
  const { colors } = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
        padding: '0.75rem 0',
        borderBottom: `2px solid ${colors.primaryLight}`,
      }}
    >
      <label
        css={{
          fontWeight: '500',
          fontSize: '1.1rem',
          marginRight: '1.5rem',
          border: 'none',
        }}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        css={{
          flex: '1',
          fontSize: '1.1rem',
          border: 'none',
          outline: 'none',
        }}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormField;
