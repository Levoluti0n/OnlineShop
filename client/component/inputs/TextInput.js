import React from 'react';
import {TextInput as Input, View} from 'react-native';

import defColors from '../../helpers/colors';
import scale from '../../helpers/scale';
import style from './style';

const TextInput = ({
  eye,
  err,
  name,
  value,
  lines,
  secure,
  onFocus,
  onSubmit,
  onChange,
  disabled,
  textStyle,
  textColor,
  placeholder,
  keyboardType,
  containerStyle,
  placeholderColor,
}) => {
  return (
    <View
      style={[
        style.container,
        err && {borderColor: defColors.red, borderWidth: 1 / scale},
        containerStyle,
      ]}>
      <Input
        value={value}
        editable={!disabled}
        scrollEnabled={false}
        numberOfLines={lines}
        multiline={lines > 1}
        secureTextEntry={secure}
        onFocus={onFocus && onFocus}
        onChangeText={text => {
          onChange && onChange(name, text);
        }}
        onSubmitEditing={() => {
          onSubmit && onSubmit();
        }}
        keyboardType={keyboardType}
        placeholder={placeholder || ''}
        style={[
          style.input,
          {
            width: eye ? '93%' : '100%',
            color: textColor,
            textAlignVertical: lines > 1 ? 'top' : 'center',
          },
          textStyle,
        ]}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

export default TextInput;
