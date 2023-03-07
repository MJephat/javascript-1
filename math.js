def getLetterGrade(score):
    score = round(score)
    if  score >= 90: return "A"
    if  90 > score >= 80: return "B"
    if  80 > score >= 70: return "C"
    if  70 > score >= 60: return "D"
    if  60 > score: return "F"