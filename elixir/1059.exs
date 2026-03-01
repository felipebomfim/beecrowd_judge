
1..100
|> Enum.filter(fn i -> rem(i, 2) == 0 end)
|> Enum.each(&IO.puts/1)
