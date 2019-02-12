# TRIPLEXLAB CSS / Scss 스타일 가이드

> **TRIPLEXLAB**은 다음과 같은 사실을 명확히 숙지하고 개발을 시작합니다.

## 목차
1. [CSS](#css )- [형식](#형식) - [주석](#주석) - [OOCSS와 BEM](#oocss와-bem) - [ID 선택자](#id-선택자) - [자바스크립트 훅](#자바스크립트-훅) - [Border](#border)
2. [Sass](#sass) - [문법](#문법) - [순서](#속성-선언-순서) - [변수](#변수) - [믹스인](#믹스인-mixins) - [Extend 지시자](#extend-지시자) - [중첩 선택자](#중첩-선택자)


## SCSS, CSS

### 형식

* 탭(띄어쓰기 4칸) 을 사용하세요.
* 클래스 이름에는 단어와 단어를 연결할때 camelCase 방식보다 `__` 와 `--`를 사용하세요.
* ID 선택자를 사용하지 마세요.
* 당신이 규칙 선언부에서 다중 선택자를 사용하실 때, 선택자를 한 줄에 한개씩 적어주세요.
* 규칙 선언부의 여는 괄호 `{` 이전에 띄어쓰기를 넣어주세요.
* 속성 부분에서, `:` 문자 뒤에 띄어쓰기를 넣어주세요. 단, `:` 문자 앞에는 띄어쓰기를 넣지 말아주세요. (예- `key: value`)
* 규칙 선언부의 닫는 괄호 `}`를 새로운 줄에 넣어주세요.
* 규칙 선언부들 사이에 빈 줄을 넣어주세요.

**올바른 예시**
```scss
.a,
.b,
.c {
  color: red;
  background: yellow;
}
```

## 주석

* 블록주석보다 라인주석(Scss일 경우 `//`)을 권장합니다.
* 주석을 새로운 줄에 적어주세요. 선택자 또는 속성과 같은 줄에 주석을 작성하는 방식을 피해주세요.
* 코드 자체만으로 이해하기 어려운 경우 자세한 주석을 작성해주세요:
  * z-index를 사용하는 경우 
    ```scss
      .modal {
        //여기서  z-index가 10인 이유는 모달창이 가장 위에 떠야 하므로 10을 사용했습니다.
        z-index: 10;
      }
    ```
  * 특정 브라우저를 지원하기 위해 사용하는 경우


### OOCSS와 BEM

우리는 다음과 같은 이유로 OOCSS와 BEM의 혼용을 권장합니다:

  * CSS와 HTML 사이의 명확하고, 엄격한 관계를 형성하는 데에 도움을 줍니다.
  * 재사용 가능하고, 작성 가능한 컴포넌트를 만드는 데에 도움을 줍니다.
  * 보다 적은 중첩과 낮은 특수성을 갖게 합니다.
  * 확장성 있는 스타일시트를 작성하도록 도움을 줍니다.

**OOCSS**,는 “Object Oriented CSS” 당신의 스타일시트를 "객체"의 모음(한 웹사이트에서 독립적으로 사용되는, 재사용 가능하고 반복 가능한 단편들)으로 생각하게 만드는 CSS 작성 방법론입니다.

* Nicole Sullivan의 [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
* Smashing Magazine의 [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

**BEM**,은 “Block-Element-Modifier” HTML과 CSS 내부의 클래스에 대한 _명명 협약_입니다. 이것은 원래 대량의 코드베이스와 확장 가능성을 염두에 두고 Yandex에서 개발되었으며, OOCSS 구현을 위한 견고한 가이드라인으로 사용할 수 있습니다.

  * CSS Trick의 [BEM 101](https://css-tricks.com/bem-101/)
  * Harry Roberts의 [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

PascalCase 형태의 블록과 함께 사용하는 BEM의 변형 방식을 권장합니다. 이는 React에서 쓰이는 컴포넌트 등과 결합할 때 효과적입니다. 이 경우에도 `_`와 `-`는 계속 변형자와 자식을 나타내기 위해 사용됩니다.

**예시**
```html
// html Template
  <div class="card card--featured">
      <h1 class="card__title">TRIPLEXLAB 2BR in the sunny Mission</h1>
    
      <p class="card__text">Vestibulum id ligula porta felis euismod semper.</p>

      <p class="card__text card__text--secondary">Vestibulum id ligula porta felis euismod semper.</p>

      <div class="card__button">
          <a href="#0">Read more</a>
      </div>
  </div>
```
```scss
/* card.scss */
.card {
    position: absolute;
    top: 20px;
    left: 60px;
    padding: 30px;
    background: nth($grey-light, 4);
    border-radius: 10px;
    border: 1px solid nth($point-red, 1);

    &.card--featured {
        background: nth($point-red, 1);
    
        .card__title {
            font-size: 20px;
        }
        .card__text {
            font-size: 16px;

            &.card__text--secondary {
                color: nth($grey-light, 7);
            }
        }
        .card__button {
            font-size: 12px;
            float: right;
            display: inline-block;
            border: 1px solid nth($point-red, 1);
            border-radius: 10px;
            a {
                padding: 10px;
            }
        }
    }
}
```
  * `.card`는 "블록"이며 하나의 컴포넌트를 나타냅니다
  * `.card__title`는 "요소"이며 그 블록을 전체로 조정하도록 돕는 `.card`의 자손임을 나타냅니다
  * `.card--featured`는 "변형자"이며 '.card' 블록에 존재하는 다른 상태 또는 변형을 나타냅니다


### 자바스크립트 훅

CSS 클래스 명에 자바스크립트 훅을 거는 것을 권장하지 않습니다. 한 클래스 명에 두 가지를 혼합시키게 되면 결국 리팩토링할 때 두 경우를 모두 고려해야하기 때문에 시간이 낭비되며, 최악의 경우에는 기능이 작동하지 않을 가능성 때문에 개발자가 코드를 변경시키길 두려워할 수도 있습니다.

자바스크립트에 바인드 할 새로운 클래스(접두어로는 `.js-`를 추가)를 만드는 것을 권장합니다:

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```


## SCSS

>**문법**

* 항상 `.sass`가 아닌 `.scss` 문법을 사용해주세요.
* 일반적인 CSS와 `@include` 선언은 논리적으로 순서를 정리해주세요. (아래 예시를 참조)

>**속성 선언 순서**

1. 속성 선언

    우선 표준 속성 선언을 먼저 작성합니다. `@include` 혹은 중첩 선택자는 아직 적지 않습니다.

    ```scss
    .btn-green {
      background: green;
      font-weight: bold;
      // ...
    }
    ```

2. `@include` 선언

    `@include`를 마지막에 모아놓으면 전체 선택자를 쉽게 독해할 수 있습니다.

    ```scss
    .btn-green {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);
      // ...
    }
    ```

3. 중첩 선택자

    중첩 선택자는 마지막에 위치합니다. 그리고 그 다음으로는 아무것도 적지 않습니다. 규칙 선언부와 중첩 선택자 사이에는 여백을 추가하며, 중첩 선택자 사이에도 마찬가지입니다. 중첩 선택자 내부 속성들 또한 위의 규칙을 따릅니다.

    ```scss
    .btn {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);

      .icon {
        margin-right: 10px;
      }
    }
    ```

>**변수**

변수 이름을 정할 때는 `-`를 사용하는 것을 권장합니다.
한 파일 내에서만 사용될 변수에 한해서는 접두어를 추가해도 괜찮습니다.<br/>
(예- `$_my-variable`).


>**믹스인-Mixins**

Mixin은 코드를 DRY하게 하고 명료하게 하며, 복잡성을 줄이기 위해 사용해야 합니다. 인자를 받지 않는 Mixin은 이럴 때 유용합니다. 하지만 만약 당신이 payload를 압축하지 않는다면(예- gzip), 불필요한 코드 중복이 발생하게 됩니다.

>**DRY 설명**
```text
 // 자신을 반복하지 마십시오.
 Don't Repeat Yourself.
```

>**Extend 지시자**

`@extend`는 직관적이지 않고 특히 중첩 선택자와 함께 사용할 때 위험성이 있기 때문에 사용하지 않는 것을 권장합니다. 심지어 최상위 placeholder 선택자를 extend해도 선택자들의 순서가 바뀌게 되면 문제가 발생할 수 있습니다. `@extend`를 사용함으로써 얻을 수 있는 이점은 Gzip을 사용하면 해결될 뿐더러, 스타일시트를 DRY하게 만들기 위해서는 mixin을 사용하면 됩니다.

>**주의**
위에서 BEM을 설명하면서 ' "블록"이며 하나의 컴포넌트를 나타냅니다 ' 라고 설명한적이 있다.
이 계념은 매우 중요합니다. 왜냐하면 블록으로 가지고 있는 클래스명이 스코프 계념과 동일 합니다.
만약 최상의 Root 클래스가 고유class명을 가지고 있지 않고, 범용적으로 사용하는 class명을 가지고 있다면 
당신은 다음과 같은 CSS를 작성하고 있을 가능성이 높습니다:

* HTML과 밀접하게 엮여있다.(스타일이 무너지기 쉬움)
* 너무 구체적이다.
* 재사용할 수 없다.
