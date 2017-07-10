## 1.结构就三个元素组成
### 一个div容器，一个input输入，一个span用于显示错误信息

## 2.样式
### 2.1 首先对外把以上三个元素的className公开，可以由外向里面传递
### 2.2 其次目的就很明确了，只支持外部样式表给元素定义样式
### 2.3 习惯而已，把css和js写在一起不是很喜欢，各有所爱

## 3.事件
### 目前还不支持自定义事件，内部我也只是定义了一个输入过滤事件（input）

## 4.目标
### 提供多种input输入组件，比如数字，电话等，还支持自定义格式，通过传入正则实现

## 5.TODO
### 5.1 多个类型组件还没有出来
### 5.2 错误显示还没有出来
#### 5.2.1 yy的错误显示：输入错误的字符不能输入，但是会在错误提示中显示
### 5.3 后期增加属性合法性检验

## 写在最后~  这里只是提供思路，写法不需要认同，看着不爽就fork自己改吧！嘿嘿嘿~

[查看使用示例](https://github.com/bigmgreen/bmg-blog/blob/master/src/components/example.jsx)

# Input组件
#### String wrapClassName:div元素class（无默认值）
#### String inputClassName:input元素class（无默认值）
#### String errorClassName:错误提示元素class（无默认值）
#### int maxLength:输入框输入长度（无默认值）
#### String pattern:过滤正则表达式（无默认值）
#### bool isChineseFilter:是否过滤中文(默认不过滤)

# NumberInput组件
#### String wrapClassName:div元素class（无默认值）
#### String inputClassName:input元素class（无默认值）
#### String errorClassName:错误提示元素class（无默认值）
#### String numberType:数字类型（默认是int），另一个值为“float”
#### int decimalPlaces:小数位数（默认15），设置时必须大于等于1
