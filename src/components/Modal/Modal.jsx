import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

// COMPONENTS
import Status from '../Status/Status'
import Chart from '../Chart/Chart'

// STYLES
import * as S from './styled-modal'

// HELPERS
import { Icons } from '../../helpers/helpers'

function Modal({ handleModal, animateModal, isDarkTheme }) {
  return (
    <S.ModalContainer className={animateModal ? 'animate' : ''}>
      <S.ModalContent>
        <S.Header>
          <S.Title>Facebook followers</S.Title>
          <S.SocialProfile>
            <img src={Icons['facebook']} alt="Social Icon" />
            <span>@nathan</span>
          </S.SocialProfile>

          <S.CloseModal onClick={handleModal} activeTheme={isDarkTheme}>
            <img src={Icons['close']} alt="Close Icon" />
          </S.CloseModal>

          <S.InfoRow>
            <div>
              <S.Followers>1987</S.Followers>
              <S.Text>
                Total <span>followers</span>
              </S.Text>
            </div>

            <div>
              <Status isUp={true} position="modal">
                81
              </Status>
              <S.Text>
                New followers in<span>the past 10 days</span>
              </S.Text>
            </div>

            <div>
              <Status isUp={true} position="modal">
                12
              </Status>
              <S.Text>
                New followers <span>TODAY</span>
              </S.Text>
            </div>
          </S.InfoRow>
        </S.Header>

        <S.Graphic>
          <Chart isDarkTheme={isDarkTheme} />
        </S.Graphic>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
