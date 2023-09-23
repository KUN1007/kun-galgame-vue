import { reactive } from 'vue'

interface Question {
  id: number
  text: string
  options: string[]
  correctOption: string
}

export const questionsEN: Question[] = reactive([
  {
    id: 1,
    text: 'Which one of the following is not a character in "Thousand Love Ten Thousand Flowers"?',
    options: ['Congyu', 'Luhua', 'Fangna', 'Ningning'],
    correctOption: 'Ningning',
  },
  {
    id: 2,
    text: 'What is the hair color of Tsudumeandesu in "Summer Pockets"?',
    options: ['Red', 'Gold', 'Purple', 'White'],
    correctOption: 'Gold',
  },
  {
    id: 3,
    text: 'What is "Galgame" known as?',
    options: [
      'Gay game',
      'Beautiful girl game',
      'Otome game',
      'Ah, this is a starfish',
    ],
    correctOption: 'Beautiful girl game',
  },
  {
    id: 4,
    text: 'Which of the following games does not belong to the "Colorful World" series?',
    options: [
      'Colorful World',
      'Beautiful Girl Game',
      'Colorful Dawn',
      'Colorful Future',
    ],
    correctOption: 'Colorful Future',
  },
  {
    id: 5,
    text: 'In which of the following works does the male protagonist not cross-dress?',
    options: [
      'Closer to the Moon Girl',
      'Girl Territory',
      'Beautiful Girl Kaleidoscope 1',
      'We Have No Wings',
    ],
    correctOption: 'Beautiful Girl Kaleidoscope 1',
  },
  {
    id: 6,
    text: 'Which of the following works was produced by "SMEE"?',
    options: ['Friend to Lover', 'Dal Segno', 'Eden*', 'LOOPERS'],
    correctOption: 'Friend to Lover',
  },
  {
    id: 7,
    text: 'Is Kun cute?',
    options: ['Cute!', 'Very cute!', 'Cutest!', 'In short, extremely cute!'],
    correctOption: 'In short, extremely cute!',
  },
])
