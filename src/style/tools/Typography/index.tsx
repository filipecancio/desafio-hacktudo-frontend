import { css } from 'styled-components';
import {mobile} from '../../generic/settings/Breakpoints';
import {_anibasic} from '../Animate'

type props = {
  abel?:string;
}

const font: { [key: string]: string; } = {
  fira:'Fira Code',
  abel:'Abel'
}

const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

const _fd = css`
  ${_anibasic}
  font-family: ${font.fira}, monospace;
  word-break: break-word;
  color: #EFEFEF;
`
const _ab = css`
  ${_anibasic}
  font-family: ${font.abel}, sans-serif;
  word-break: break-word;
  color: #EFEFEF;
`

const _fdh1 = css`
  ${_fd};
  font-size: 22px;
  font-weight: ${weight.bold};
  @media ${mobile.tablet}{
    font-size: 30px;
  }
  @media ${mobile.desktop}{
      font-size: 40px;
    }
`
const _fdh2 = css`
  ${_fd};
  font-size: 20px;
  font-weight: ${weight.bold};
  @media ${mobile.tablet}{
    font-size: 28px;
  }
  @media ${mobile.desktop}{
      font-size: 36px;
    }
`
const _fdh3 = css`
  ${_fd};
  font-size: 18px;
  font-weight: ${weight.medium};
  @media ${mobile.tablet}{
    font-size: 24px;
  }
  @media ${mobile.desktop}{
      font-size: 32px;
    }
`
const _fdh4 = css`
  ${_fd};
  font-size: 18px;
  font-weight: ${weight.light};
  @media ${mobile.tablet}{
    font-size: 22px;
  }
  @media ${mobile.desktop}{
      font-size: 28px;
    }
`
const _fdtextsmall = css`
  ${_fd};
  font-size: 10px;
  @media ${mobile.tablet}{
    font-size: 11px;
  }
  @media ${mobile.desktop}{
      font-size: 11px;
    }
`
const _fdtext = css`
  ${_fd};
  font-size: 11px;
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 18px;
    }
`


const _abh1 = css`
  ${_ab};
  font-size: 20px;
  @media ${mobile.tablet}{
    font-size: 30px;
  }
  @media ${mobile.desktop}{
      font-size: 40px;
    }
`
const _abh2 = css`
  ${_ab};
  font-size: 18px;
  @media ${mobile.tablet}{
    font-size: 28px;
  }
  @media ${mobile.desktop}{
      font-size: 36px;
    }
`
const _abh3 = css`
  ${_ab};
  font-size: 16px;
  @media ${mobile.tablet}{
    font-size: 24px;
  }
  @media ${mobile.desktop}{
      font-size: 32px;
    }
`
const _abh4 = css`
  ${_ab};
  font-size: 16px;
  @media ${mobile.tablet}{
    font-size: 22px;
  }
  @media ${mobile.desktop}{
      font-size: 28px;
    }
`
const _abtext = css`
  ${_ab};
  font-size: 14px;
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 18px;
    }
`
const _abtextsmall = css`
  ${_ab};
  font-size: 10px;
  @media ${mobile.tablet}{
    font-size: 11px;
  }
  @media ${mobile.desktop}{
      font-size: 11px;
    }
`

export const _h1 = css<props>`
  ${props => props.abel ? _abh1 : _fdh1};
`

export const _h2 = css<props>`
  ${props => props.abel ? _abh2 : _fdh2};
`

export const _h3 = css<props>`
  ${props => props.abel ? _abh3 : _fdh3};
`

export const _h4 = css<props>`
  ${props => props.abel ? _abh4 : _fdh4};
`

export const _text = css<props>`
  ${props => props.abel ? _abtext : _fdtext};
`
export const _textsmall = css<props>`
  ${props => props.abel ? _abtextsmall : _fdtextsmall};
`
