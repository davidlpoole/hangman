interface Props {
  guessed: string[]
  setGuessed: React.Dispatch<React.SetStateAction<string[]>>
}

function LettersUnused({ guessed, setGuessed }: Props) {
  const lettersArr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  return lettersArr.map((letter, index) => (
    <button
      className="letterButton"
      name={letter}
      value={letter}
      onClick={(e) => {
        setGuessed([...guessed, e.target.value])
      }}
      key={index}
      disabled={guessed.includes(letter)}
    >
      {letter}
    </button>
  ))
}

export default LettersUnused
