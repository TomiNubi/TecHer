const keywordsList = {
    "potential": 
    //A score of 3 is given to characterisics that are closely collerated to compiter scientists
    //from research. 2 is averagely correlated. 1 correlated to secondary asepcts of the field
        {
            "problem_solving": 3,
            "resourcefulness": 2,
            "analytical": 3,
            "tech_savvy": 3,
            "creative": 2,
            "technical":3,
            "innovative": 3,
            "investigative":2,
            "passionate": 3,
            "resilient": 3,
            "patient":2,
            "collaborative":2,
            "detail":1,
            "financially_motivated": 1,
            "influential":1,
            "desire_for_flexibility": 1,
            "confident":1,
            "curious": 1
        },

    "misconception": {
        "male_oriented": 3,
        "programming_specific": 3,
        "complicated_for_children": 2,
        "antisocial": 3,
        "math_dependent": 2,
        "degree_dependent":1,
        "not_creative":2,
        "female_presence": 1,
        "individual_oriented":1,

        //concerns that lead to misconceptions. Scores are dependent on the presence of other misconceptions
        "expensive":0,
        "overly_difficult": 0,
        "boring": 0,
        "time_taking":0,
    },

    "maleScienceAssociation": {
        "gender_based_skill":2,
        "gender_based_interest":2,
        "gender_based_success": 3,
        "IAT_strong_association": 5,
        "IAT_moderate_association": 3,
        "IAT_slight_association": 2
    } 
}

export default keywordsList