export default "{{#ember-chosen value=optgroupSelectValue}}\n" +
              "    <option value=\"\"></option>\n" +
              "    <optgroup label=\"NFC EAST\">\n" +
              "        <option>Dallas Cowboys</option>\n" +
              "        <option>New York Giants</option>\n" +
              "        <option>Philadelphia Eagles</option>\n" +
              "        <option>Washington Redskins</option>\n" +
              "    </optgroup>\n" +
              "    <!-- You get the rest -->\n" +
              "{{/ember-chosen}}\n" +
              "\n" +
              "<p>Selected value: {{optgroupSelectValue}}</p>";
