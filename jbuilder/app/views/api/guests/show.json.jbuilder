# debugger
json.partial! 'api/guests/guest', guest: @guest
json.gifts do
    @guest.gifts
end