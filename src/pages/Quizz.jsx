import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quizz = () => {
  const quizData = [
    {
      "question": "Seberapa sering Anda merasa sedih atau terganggu secara emosional dalam dua minggu terakhir?",
      "a": "Tidak pernah",
      "b": "Jarang sekali",
      "c": "Kadang-kadang",
      "d": "Sering",
      "correct": "a"
    },
    {
      "question": "Apakah Anda kehilangan minat atau kegembiraan dalam melakukan aktivitas yang biasanya Anda nikmati dalam dua minggu terakhir?",
      "a": "Tidak sama sekali",
      "b": "Sedikit",
      "c": "Cukup banyak",
      "d": "Sangat banyak",
      "correct": "a"
    },
    {
      "question": "Seberapa sering Anda merasa tertekan atau tidak berdaya dalam dua minggu terakhir?",
      "a": "Jarang sekali",
      "b": "Kadang-kadang",
      "c": "Sering",
      "d": "Hampir setiap saat",
      "correct": "a"
    },
    {
      "question": "Apakah Anda mengalami perubahan nafsu makan (meningkat atau menurun) dalam dua minggu terakhir?",
      "a": "Tidak ada perubahan",
      "b": "Sedikit perubahan",
      "c": "Perubahan yang cukup signifikan",
      "d": "Perubahan yang sangat signifikan",
      "correct": "a"
    },
    {
      "question": "Seberapa sering Anda merasa kehilangan energi atau merasa lelah dalam dua minggu terakhir?",
      "a": "Jarang sekali",
      "b": "Kadang-kadang",
      "c": "Sering",
      "d": "Hampir setiap saat",
      "correct": "a"
    },
    {
      "question": "Apakah Anda mengalami perubahan tidur (insomnia atau hipersomnia) dalam dua minggu terakhir?",
      "a": "Tidak ada perubahan",
      "b": "Sedikit perubahan",
      "c": "Perubahan yang cukup signifikan",
      "d": "Perubahan yang sangat signifikan",
      "correct": "a"
    },
    {
      "question": "Seberapa sering Anda merasa tidak berharga atau bersalah dalam dua minggu terakhir?",
      "a": "Jarang sekali",
      "b": "Kadang-kadang",
      "c": "Sering",
      "d": "Hampir setiap saat",
      "correct": "a"
    },
    {
      "question": "Apakah Anda mengalami kesulitan untuk berkonsentrasi dalam dua minggu terakhir?",
      "a": "Tidak sama sekali",
      "b": "Sedikit",
      "c": "Cukup banyak",
      "d": "Sangat banyak",
      "correct": "a"
    },
    {
      "question": "Seberapa sering Anda merasa gelisah atau tidak tenang dalam dua minggu terakhir?",
      "a": "Jarang sekali",
      "b": "Kadang-kadang",
      "c": "Sering",
      "d": "Hampir setiap saat",
      "correct": "a"
    },
    {
      "question": "Apakah Anda memiliki pemikiran untuk mengakhiri hidup Anda atau merasa bahwa hidup tidak berharga dalam dua minggu terakhir?",
      "a": "Tidak sama sekali",
      "b": "Sedikit",
      "c": "Cukup banyak",
      "d": "Sangat banyak",
      "correct": "a"
    },
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.id);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedAnswer('');
    setCurrentQuiz((prevQuiz) => prevQuiz + 1);
  };

  const handleReload = () => {
    setCurrentQuiz(0);
    setScore(0);
  };

  return (
  <div className='quiz-body'>
    <div className="quiz-container">
      {currentQuiz < quizData.length ? (
        <div className="quiz-header">
          <h2 className='quiz-h2' id="question">{quizData[currentQuiz].question}</h2>
          <ul className='quiz-ul'>
            <li className='quiz-li'>
              <input
                type="radio"
                name="answer"
                id="a"
                className="answer"
                checked={selectedAnswer === 'a'}
                onChange={handleAnswerSelect}
              />
              <label className='quiz-label' htmlFor="a" id="a_text">
                {quizData[currentQuiz].a}
              </label>
            </li>

            <li className='quiz-li'>
              <input
                type="radio"
                name="answer"
                id="b"
                className="answer"
                checked={selectedAnswer === 'b'}
                onChange={handleAnswerSelect}
              />
              <label className='quiz-label' htmlFor="b" id="b_text">
                {quizData[currentQuiz].b}
              </label>
            </li>

            <li className='quiz-li'>
              <input
                type="radio"
                name="answer"
                id="c"
                className="answer"
                checked={selectedAnswer === 'c'}
                onChange={handleAnswerSelect}
              />
              <label className='quiz-label' htmlFor="c" id="c_text">
                {quizData[currentQuiz].c}
              </label>
            </li>

            <li className='quiz-li'>
              <input
                type="radio"
                name="answer"
                id="d"
                className="answer"
                checked={selectedAnswer === 'd'}
                onChange={handleAnswerSelect}
              />
              <label className='quiz-label' htmlFor="d" id="d_text">
                {quizData[currentQuiz].d}
              </label>
            </li>
          </ul>

          <button className='quiz-button' onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Next
          </button>
        </div>
      ) : (
        <div className="quiz-result">
          <h2 className='quiz-h2'>
            Anda mengalami {parseInt((score / quizData.length) * 100)}% depresi 
          </h2>
          <h4 className='quiz-h2'>
            <Link to="/landing">Back to home?</Link>
          </h4>
          <button className='quiz-button' onClick={handleReload}>Reload</button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Quizz;
