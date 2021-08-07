import Image from "next/image";
import logo from "../assets/dr-kobros-logo-large.png";
import { Container, Box, Heading } from "theme-ui";

const FoundationPage = () => {
  return (
    <Container as="main" py={4} px={2}>
      <Box
        mb={3}
        sx={{
          textAlign: "center",
        }}
      >
        <Image alt="Dr. Kobros" src={logo} />
        <Heading as="h1" variant="edmunds">
          The Dr. Kobros Foundation
        </Heading>
      </Box>

      <div id="content">
        <Heading as="h2">Adventuring in America</Heading>

        <p>
          Born in 1867, Ragnar Kobros spent his early years in the provincial
          capital of Christiania. In 1885, he embarked on a great journey;
          crossing the Atlantic and the United States to reach the still untamed
          new territories. There, he would start life anew and build a business
          empire of his own.
        </p>

        <p>
          In the years to come, Ragnar made a fortune selling{" "}
          <strong>Dr. Kobros®</strong> branded snake oil and enema machines to
          the ointment-hungry residents of the Wild West from his relentlessly
          growing fleet of snake oil wagons traveling between the settlements.
        </p>

        <p>
          By 1900 the west was not so wild anymore, and the people had gotten
          enough of Kobros and his snake oil. He returned to Norway, a self made
          millionaire and now a hero to the common people struggling daily under
          the harsh rule of the Swedish colonial authority.
        </p>

        <h2>The people's hero</h2>

        <p>
          Ragnar Kobros funded and organized a resistance movement. His methods
          were peaceful, but when the Swedish oppressors responded to Kobros'
          peaceful protests with guns he was forced to switch methods. He
          employed terror tactics and waged guerrilla warfare from the
          mountains. During this period he also met his wife, who gave birth to
          a son, Ragnar II, in 1904.
        </p>

        <p>
          The greedy and evil Swedes were finally forced into submission in
          1905, and Norway gained it's independence. Dr. Kobros led a movement
          to establish a republic with himself as the president, but when the
          newly formed state was threatened by a civil war between Kobros'
          republicans and the monarchists, it was time for him to step down.
        </p>

        <p>
          Dr. Kobros' intention was to retire and live a simpler life, but the
          Great War was an opportunity he could not let pass by. Between 1914
          and 1918 Kobros sold loads of "wonder weapons" to all warring parties.
          And after the war, when the Spanish Flu struck, his was the medicine
          that gave hope to millions.
        </p>

        <h2>An economic empire</h2>

        <p>
          During the interwar years, the family business empire flourished. Many
          subsidiaries of the Dr. Kobros company were found. Ragnar Kobros
          became the wealthiest man in Norway.
        </p>

        <p>
          Ragnar II, groomed by his father to be his successor, proved himself
          by investing on the roaring stock markets of the 1920s. Young Ragnar
          saw the economic bubble as it was, and on October 28, 1929, he began
          to sell. Next day, on the famous Black Tuesday, his actions caused the
          Wall Street crash; but not before Ragnar II had escaped with his
          well-earned millions.
        </p>

        <p>
          During the great depression of the 30s Ragnar Kobros again sensed the
          winds of change. He chose to invest in the rebuilding of Germany under
          it's new energetic leadership, and when another war began, the company
          -- now lead by Ragnar's son -- greeted it as another vast opportunity.
        </p>

        <h2>Fighting the Nazis</h2>

        <p>
          The national socialists, however, chose to betray the Kobros family.
          To capture the Dr. Kobros heavy water installations and to secure the
          transportation of iron ore mined in the Kobros mines of Sweden from
          the harbors operated by the Kobros economic empire, Germany invaded
          Norway. Ragnar II orchestrated the timely escape of the royal family
          to England. Ragnar's own family, his wife and his son Ragnar III,
          followed the king to exile, but Ragnar himself chose to stay.
        </p>

        <p>
          Again, a member of the Kobros family organized a resistance movement.
          Even when the nazis seized all Kobros assets and threatened to execute
          his father whom they had captured, Ragnar II did not give up. He knew
          that this great evil had to be fought (and the documents proving their
          earlier businesses with said evil had to be rescued from their Oslo
          offices, now serving as a Gestapo HQ).
        </p>

        <p>
          Ragnar sabotaged his own heavy water plant with a heavy heart, thus
          preventing the Germans from obtaining an atomic bomb. This was the
          last straw for Josef Terboven, the Reichskomissar of occupied Norway,
          who now made good on his threat and had Ragnar's elderly father shot
          dead. It was a terrible sacrifice, but one willingly made for the
          greater good of the company and it's assets.
        </p>

        <p>
          In the last, chaotic days of the war, Ragnar and his men marched into
          Oslo, liberating the company's premises and the people of the city.
          The documents were safe.
        </p>

        <h2>Founding the Foundation</h2>

        <p>
          The second world war struck a devastating blow on Dr. Kobros. Most of
          their assets around Europe were reduced to rubble, and what was still
          standing in the East was quickly dismantled by the Soviet Union.
          Ragnar II, his spirit crushed by the death of his beloved father and
          his health diminished by the war years, stepped down as CEO and
          Chairman in favor of his young son, Ragnar III.
        </p>

        <p>
          Ragnar III, wise beyond his years, decided to again concentrate on the
          Kobros' core business: snake oil. It had been an error, he claimed, to
          branch out. Ragnar III swiftly reorganized the whole Kobros corporate
          hierarchy, devicing an ingenious web of companies and other entities
          culminating in the Dr. Kobros Foundation. Much was lost, but at least
          they were now free from the grip of corporate taxation.
        </p>

        <h2>Today and in the future</h2>

        <p>
          Founded in remembrance of his grandfather, the greatest snake oil
          peddler of all time, the Dr. Kobros Foundation is firmly and solely
          dedicated to the promotion of snake oil and snake oil related products
          worldwide.
        </p>

        <p>
          Currently lead by chairman Ragnar Kobros III and interim CEO Gaylord
          L. Lohiposki, the foundation has lately been focusing on the Internet.
          It's proved itself to be an unprecedented marketing channel for snake
          oil.
        </p>
      </div>
    </Container>
  );
};

export default FoundationPage;
