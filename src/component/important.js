
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function important() {


  return (

    <>
      <section>
        <div className="important" id="important">
          <h2 id="importantH2"> Important things to note....</h2>
          <div className="detail">
            <ul id="importantText">
              <li>
                <FontAwesomeIcon icon={faMoneyBill} className="fa fa-money-bill-wave" />
              </li>
              <li>
                <strong>Pricing</strong>
              </li>
              <li>Audition forms are available for </li>
              <li> ₦1,000 single contestants,</li>
              <li>and ₦1,500 for a group of five.</li>
            </ul>
          </div>
          <div className="detail">
            <ul className="prize-list" id="importantText2">
              <li>
                <FontAwesomeIcon icon={faTrophy} className="fa fa-trophy" />
              </li>
              <li>
                <strong>Prizes</strong>
              </li>
              <li>
                <strong>1st Prize: ₦</strong>2,000,000
              </li>
              <li>
                <strong>2nd Prize: ₦</strong>1,000,000
              </li>
              <li>
                <strong>3rd Prize: ₦</strong>500,000
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )

}
export default important;