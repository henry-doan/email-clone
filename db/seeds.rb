@filter = ['Spam', 'Normal', 'Important']
@category = ['Main', 'Social', 'Promo']

50.times do 
    Email.create(
        header: Faker::FamousLastWords.last_words, 
        body: Faker::BackToTheFuture.quote,
        sender: Faker::Internet.email,
        category: @category.sample,
        filter: @filter.sample,
        time: Faker::Date.backward(14),
        user_id: 1
    )
end

p "Seeded #{Email.count} emails"